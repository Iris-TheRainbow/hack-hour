// Environment Variables - typescript doesn't typecheck process.env
// Throw if not defined
export function assertEnv(envVar: string): string { 
  if (!process.env[envVar]) { 
    throw new Error(`Environment variable ${envVar} is not defined.`); 
  } else {
    return process.env[envVar] as string;
  }
}

export const Environment = {
  // Control Flags
  PROD: (process.env.PROD === 'true'),
}

// Constants
export const Constants = {
  MIN_MS: 60 * 1000,
//  MIN_MS: 1 * 1000,
  HOUR_MS: 60 * 60 * 1000,

  AUTO_CANCEL: 60
};