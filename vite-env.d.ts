interface ImportMetaEnv {
    readonly VITE_ZEGOCLOUD_APP_ID: string;
    readonly VITE_ZEGOCLOUD_SERVER_SECRET: string;
    // Add other environment variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  } 