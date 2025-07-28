import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonsDropdownButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_dropdown_buttons';
  info: {
    displayName: 'dropdownButton';
  };
  attributes: {
    href: Schema.Attribute.Text;
    isOnPage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface ButtonsNavbarButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_navbar_buttons';
  info: {
    displayName: 'navbarButton';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface ButtonsThemeToggle extends Struct.ComponentSchema {
  collectionName: 'components_buttons_theme_toggles';
  info: {
    displayName: 'themeToggle';
  };
  attributes: {
    darkIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    darkMode: Schema.Attribute.Boolean;
    lightIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ImagesIcon extends Struct.ComponentSchema {
  collectionName: 'components_images_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedHeroSliderSeccion extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_slider_seccions';
  info: {
    displayName: 'HeroSliderSeccion';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavbar extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'buttons.navbar-button', true>;
    dropdownButtons: Schema.Attribute.Component<
      'buttons.dropdown-button',
      true
    >;
    logo: Schema.Attribute.Component<'images.icon', false>;
    themeToggle: Schema.Attribute.Component<'buttons.theme-toggle', false>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedServicesGridSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_services_grid_sections';
  info: {
    displayName: 'ServicesGridSection';
  };
  attributes: {};
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'buttons.dropdown-button': ButtonsDropdownButton;
      'buttons.navbar-button': ButtonsNavbarButton;
      'buttons.theme-toggle': ButtonsThemeToggle;
      'images.icon': ImagesIcon;
      'shared.hero-slider-seccion': SharedHeroSliderSeccion;
      'shared.media': SharedMedia;
      'shared.navbar': SharedNavbar;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.services-grid-section': SharedServicesGridSection;
      'shared.slider': SharedSlider;
    }
  }
}
