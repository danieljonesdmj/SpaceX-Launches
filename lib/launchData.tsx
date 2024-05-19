export type launchData = {
  id: string;
  links: {
    patch: {
      small: string;
    };
  };
  name: string;
  date_utc: string;
  cores: {
    core: {
      serial: string;
    };
  }[];
  payloads: {
    type: string;
    id: string;
  }[];
  success: boolean;
  failures: [
    {
      alititude: string;
      reason: string;
      time: string;
    }
  ];
};
