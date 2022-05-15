import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  getSidebars(sidebarCode: string): any[] {
    const menu = [
      {
        code: 'dashboard',
        name: 'Dashboard',
        icon: 'home',
        link: '/dashboard',
      },
      {
        code: 'general',
        name: 'Pengaturan Umum',
        icon: 'cog',
        link: null,
        children: [
          { name: 'User & Permission', link: '/user' },
          { name: 'Topik', link: '/topic' },
          { name: 'Organisasi', link: '/organization' },
          { name: 'Satuan Kerja', link: '/organization-unit-0' },
          { name: 'Satuan', link: '/unit' },
          { name: 'Syarat & Ketentuan', link: '/agreement' },
          { name: 'Tag', link: '/tag' },
        ],
      },
    ];

    const mapped = menu.map((element) => ({
      slide: element.code === sidebarCode,
      ...element,
    }));

    return mapped;
  }
}
