import { getClient } from "@/lib/apollo/client";
import { HEADER_QUERY, MENUS_AND_HEADER_QUERY } from "./queries";
import { toRelativeLink } from "@/lib/utils";

export async function getHeader() {
  const { data } = await getClient().query({
    query: HEADER_QUERY,
  });
  return data?.themeSettingsHeader || null;
}

function mapMenuNodes(nodes = []) {
  const list = Array.isArray(nodes) ? nodes : [];
  const top = list.filter((n) => !n.parentId);
  return top.map((n) => ({
    label: n.label,
    href: toRelativeLink(n.path),
    children: (n.childItems?.nodes || []).map((c) => ({
      label: c.label,
      href: toRelativeLink(c.path),
    })),
  }));
}

export async function getHeaderAndMenus(uri = "/") {
  const { data } = await getClient().query({
    query: MENUS_AND_HEADER_QUERY,
    variables: { uri },
  });
  console.log('===header=================================');
  console.log(data);
  console.log('====================================');
  const primary = mapMenuNodes(data?.primary?.menuItems?.nodes);
  const secondary = mapMenuNodes(data?.secondary?.menuItems?.nodes);
  const logos = {
    dark: data?.headerSettings?.themeSettingsHeader?.logoDarkBlue?.node?.sourceUrl,
    light: data?.headerSettings?.themeSettingsHeader?.logowhitecolor?.node?.sourceUrl,
  };
  const opts = data?.pageBy?.pageHeaderOptions || {};
  const pick = (arr, def) => (Array.isArray(arr) ? arr[0] : arr) || def;
  return {
    nav: primary,
    secondary,
    logos,
    options: {
      headerBgDefault: pick(opts.headerBgDefault, "transparent"),
      headerBgScroll: pick(opts.headerBgScroll, "light"),
      headerTheme: pick(opts.headerTheme, "light"),
      logoModeDefault: pick(opts.logoModeDefault, "dark"),
    },
  };
}
