/**
 * Redis client for view counter
 * Uses Upstash Redis REST API (serverless-friendly)
 * Falls back to in-memory storage if Redis is not configured (development only)
 */

const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

// In-memory fallback storage (for development without Redis)
const memoryStore = new Map<string, string>();

const isRedisConfigured = !!(UPSTASH_REDIS_REST_URL && UPSTASH_REDIS_REST_TOKEN);

if (!isRedisConfigured && process.env.NODE_ENV === 'development') {
  console.warn('⚠️ Redis not configured. Using in-memory storage (development only).');
}

class RedisClient {
  private url: string;
  private token: string;
  private useMemory: boolean;

  constructor() {
    this.url = UPSTASH_REDIS_REST_URL || '';
    this.token = UPSTASH_REDIS_REST_TOKEN || '';
    this.useMemory = !isRedisConfigured;
  }

  private async execute(command: string[]) {
    // Use in-memory storage if Redis is not configured (development only)
    if (this.useMemory) {
      if (process.env.NODE_ENV === 'production') {
        throw new Error('Redis must be configured in production');
      }
      return this.executeMemory(command);
    }

    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify(command),
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Redis error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.result;
    } catch (error) {
      console.error('Redis error:', error);
      throw error;
    }
  }

  private executeMemory(command: string[]): any {
    const [cmd, key, ...args] = command;

    switch (cmd) {
      case 'INCR': {
        const current = parseInt(memoryStore.get(key) || '0', 10);
        const newValue = current + 1;
        memoryStore.set(key, newValue.toString());
        return newValue;
      }
      case 'GET': {
        return memoryStore.get(key) || null;
      }
      case 'SET': {
        const [value] = args;
        memoryStore.set(key, value);
        return 'OK';
      }
      case 'EXISTS': {
        return memoryStore.has(key) ? 1 : 0;
      }
      case 'MGET': {
        const keys = [key, ...args];
        return keys.map(k => memoryStore.get(k) || null);
      }
      default:
        return null;
    }
  }

  async increment(key: string): Promise<number> {
    return this.execute(['INCR', key]);
  }

  async get(key: string): Promise<string | null> {
    return this.execute(['GET', key]);
  }

  async set(key: string, value: string, expirySeconds?: number): Promise<string> {
    if (expirySeconds) {
      return this.execute(['SET', key, value, 'EX', expirySeconds.toString()]);
    }
    return this.execute(['SET', key, value]);
  }

  async exists(key: string): Promise<number> {
    return this.execute(['EXISTS', key]);
  }

  async mget(keys: string[]): Promise<(string | null)[]> {
    if (keys.length === 0) return [];
    return this.execute(['MGET', ...keys]);
  }
}

export const redis = new RedisClient();
