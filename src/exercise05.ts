export type NetworkConfig = {
  serverUrl: string;
  port: number;
};

export type EnvironmentConfig = {
  timeout: number;
  environment: "dev" | "prod";
};

const defaults: AppConfig = {
  serverUrl: "http://localhost",
  port: 8080,
  environment: "dev",
  timeout: 3000,
};

export type AppConfig = NetworkConfig & EnvironmentConfig;

export function initializeConfig(userOverrides: Partial<AppConfig>): AppConfig {
  return {...defaults, ...userOverrides};
}
