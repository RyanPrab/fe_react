import gql from 'graphql-tag';

const GET_CATEGORY_BY_URL_ID = gql`
query categoryById {
  category(id: 92) {
    id
    description
    name
    product_count
    cms_block {
      content
    }
    sis_category_banner_image
    sis_category_general_banner_image
    sis_category_bg_color
    sis_category_seo_h1_tag
    meta_title @include(if: true)
    meta_keywords @include(if: true)
    meta_description
    url_key
    url_path
  }
  products(
    pageSize: 6
    currentPage: 1
    sort: {
      position: ASC
    }
    filter: {
      category_id: {
        eq: "92"
      }
    }
  ) {
    aggregations {
      attribute_code
      label
      options {
        count
        label
        value
      }
    }
    items {
      # Once graphql-ce/1027 is resolved, use a ProductDetails fragment here instead.
      __typename
      description {
        html
      }
      id
      media_gallery_entries {
        id
        label
        position
        disabled
        file
      }
      meta_title @include(if: true)
      meta_keyword @include(if: true)
      meta_description
      name
      price_tiers {
        final_price {
          value
        }
      }
      price {
        regularPrice {
          amount {
            currency
            value
          }
        }
      }
      retail_price
      sis_stock_status
      special_price
      sis_stock_quantity
      sis_stock_min_quantity
      sis_stock_max_quantity
      sis_small_image
      sis_main_image
      sis_gallery_images
      affiliate_amount
      catalog_id
      stock_status_label
      sku
      brand
      is_restock
      small_image {
        url
      }
      url_key
      ... on ConfigurableProduct {
        configurable_options {
          attribute_code
          attribute_id
          id
          label
          values {
            default_label
            label
            store_label
            use_default_value
            value_index
          }
        }
        variants {
          attributes {
            code
            value_index
          }
          product {
            id
            media_gallery_entries {
              id
              disabled
              file
              label
              position
            }
            retail_price
            catalog_id
            stock_status_label
            sku
            sis_stock_status
            special_price
            sis_stock_quantity
            sis_stock_min_quantity
            sis_stock_max_quantity
            sis_small_image
            sis_main_image
            sis_gallery_images
            affiliate_amount
            brand
          }
        }
      }
    }
    page_info {
      total_pages
      current_page
    }
    total_count
  }
}
`;

export default GET_CATEGORY_BY_URL_ID;
