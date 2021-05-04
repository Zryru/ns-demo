import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'jdc.nativescript.nsngcourse',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;
