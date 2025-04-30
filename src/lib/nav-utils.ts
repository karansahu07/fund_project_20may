import { NAV_DATA, NavSectionType } from '@/components/Layouts/sidebar/data'

export const getFilteredNavData = (role: string): NavSectionType[] => {
  return NAV_DATA.map((section) => {
    // Filter items based on role
    const filteredItems = section.items.filter((item) => {
      // Check if item has an 'auth' property and whether it includes the current role
      return !item.auth || item.auth.includes(role);
    });

    // Return the section with the filtered items
    return {
      ...section,
      items: filteredItems,
    };
  })
  .filter((section) => section.items.length > 0); 
}
