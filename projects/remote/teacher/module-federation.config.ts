import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'gradebook-teacher',
  exposes: {
    './Routes': 'projects/remote/teacher/src/app/components/entry.routes.ts',
  },
};

export default config;
