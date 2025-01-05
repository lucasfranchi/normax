import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.maneger.app',
  appName: 'Maneger',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    cleartext: true
  }
};

export default config;
