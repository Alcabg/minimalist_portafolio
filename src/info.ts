export interface Info {
  id: string;
  section: string;
  title: string;
  url: string;
  icon: string;
  hotkey: string;
  handler?: () => void;
}

export function parseInfo(info: string): Info[] {
  const parsedInfo = JSON.parse(info);

  return parsedInfo.map(({ url, hotkey, icon, id, section, title }: Info) => {
    return {
      id,
      title,
      icon,
      hotkey,
      section,
      handler: () => {
        window.open(url, "_blank");
      },
    };
  });
}
