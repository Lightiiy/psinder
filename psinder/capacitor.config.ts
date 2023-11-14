import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lightiiyTest.psinder',
  appName: 'psinder',
  webDir: 'dist/psinder',
  server: {
    androidScheme: 'https'
  }
};

export default config;
