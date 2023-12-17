export default ({ config }) => {
  const { APP_ENV } = process.env;

  switch (APP_ENV) {
    case "development": {
      return {
        ...config,
        name: "Bin to Dec (DEVELOPMENT)",
        android: {
          package: "com.hmdakfire.bintodec.development",
        },
      };
    }
    case "preview": {
      return {
        ...config,
        name: "Bin to Dec (PREVIEW)",
        android: {
          package: "com.hmdakfire.bintodec.preview",
        },
      };
    }
    default: {
      return {
        ...config,
        android: {
          package: "com.hmdarkfire.bintodec",
        },
      };
    }
  }
};
