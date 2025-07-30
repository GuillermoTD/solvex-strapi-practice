import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonsButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ButtonsDropdownButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_dropdown_buttons';
  info: {
    displayName: 'dropdownButton';
  };
  attributes: {
    href: Schema.Attribute.String;
    isOnPage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface ButtonsImageButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_image_buttons';
  info: {
    displayName: 'imageButton';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    label: Schema.Attribute.String;
  };
}

export interface ButtonsTextButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_text_buttons';
  info: {
    displayName: 'textButton';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ButtonsThemeToggle extends Struct.ComponentSchema {
  collectionName: 'components_buttons_theme_toggles';
  info: {
    displayName: 'themeToggle';
  };
  attributes: {
    darkIcon: Schema.Attribute.Media<'images' | 'files'>;
    darkMode: Schema.Attribute.Boolean;
    lightIcon: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedAchievementsAchieved extends Struct.ComponentSchema {
  collectionName: 'components_shared_achievements_achieveds';
  info: {
    displayName: 'Achievements Achieved';
  };
  attributes: {
    achivementItems: Schema.Attribute.Component<
      'shared.achivement-items',
      true
    >;
    achivementStatistics: Schema.Attribute.Component<
      'shared.achivements-statistics',
      true
    >;
  };
}

export interface SharedAchivementItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_achivement_items';
  info: {
    displayName: 'AchivementItems';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
  };
}

export interface SharedAchivementsStatistics extends Struct.ComponentSchema {
  collectionName: 'components_shared_achivements_statistics';
  info: {
    displayName: 'achivementsStatistics';
  };
  attributes: {
    description: Schema.Attribute.String;
    Label: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    button: Schema.Attribute.Component<'buttons.button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_blocks';
  info: {
    displayName: 'contactBlock';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedEnterpriseProducts extends Struct.ComponentSchema {
  collectionName: 'components_shared_enterprise_products';
  info: {
    displayName: 'enterpriseProducts';
  };
  attributes: {
    description: Schema.Attribute.Text;
    productCards: Schema.Attribute.Component<'shared.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedEnterpriseServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_enterprise_services';
  info: {
    displayName: 'enterpriseServices';
  };
  attributes: {
    description: Schema.Attribute.Text;
    serviceButtons: Schema.Attribute.Component<'buttons.image-button', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    contactBlocks: Schema.Attribute.Component<'shared.contact-block', true>;
    footerBlocks: Schema.Attribute.Component<'shared.footer-block', true>;
    footerButtons: Schema.Attribute.Component<'buttons.text-button', true>;
    socialIconsBar: Schema.Attribute.Component<'shared.header', false>;
  };
}

export interface SharedFooterBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_blocks';
  info: {
    displayName: 'footerBlock';
  };
  attributes: {
    blockButtons: Schema.Attribute.Component<'buttons.text-button', true>;
    titleButton: Schema.Attribute.Component<'buttons.text-button', false>;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'iconBar';
  };
  attributes: {
    socialIconButtons: Schema.Attribute.Component<'buttons.image-button', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedHeroSliderSeccion extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_slider_seccions';
  info: {
    displayName: 'heroSlider';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files', true>;
    text: Schema.Attribute.String;
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
    displayName: 'navbar';
  };
  attributes: {
    dropdownButtons: Schema.Attribute.Component<
      'buttons.dropdown-button',
      true
    >;
    logoButton: Schema.Attribute.Component<'buttons.image-button', false>;
    navbarButtons: Schema.Attribute.Component<'buttons.text-button', true>;
    startNavbarButton: Schema.Attribute.Component<'buttons.text-button', false>;
    themeToggle: Schema.Attribute.Component<'buttons.theme-toggle', false>;
  };
}

export interface SharedPartnersFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_partners_footers';
  info: {
    displayName: 'partnersFooter';
  };
  attributes: {
    partnerBadges: Schema.Attribute.Media<'images' | 'files', true>;
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

export interface SharedSliderBox extends Struct.ComponentSchema {
  collectionName: 'components_shared_slider_boxes';
  info: {
    displayName: 'SliderBox';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'buttons.button': ButtonsButton;
      'buttons.dropdown-button': ButtonsDropdownButton;
      'buttons.image-button': ButtonsImageButton;
      'buttons.text-button': ButtonsTextButton;
      'buttons.theme-toggle': ButtonsThemeToggle;
      'shared.achievements-achieved': SharedAchievementsAchieved;
      'shared.achivement-items': SharedAchivementItems;
      'shared.achivements-statistics': SharedAchivementsStatistics;
      'shared.card': SharedCard;
      'shared.contact-block': SharedContactBlock;
      'shared.enterprise-products': SharedEnterpriseProducts;
      'shared.enterprise-services': SharedEnterpriseServices;
      'shared.footer': SharedFooter;
      'shared.footer-block': SharedFooterBlock;
      'shared.header': SharedHeader;
      'shared.hero-slider-seccion': SharedHeroSliderSeccion;
      'shared.media': SharedMedia;
      'shared.navbar': SharedNavbar;
      'shared.partners-footer': SharedPartnersFooter;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.services-grid-section': SharedServicesGridSection;
      'shared.slider': SharedSlider;
      'shared.slider-box': SharedSliderBox;
    }
  }
}
