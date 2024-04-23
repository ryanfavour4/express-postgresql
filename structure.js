const META_MALL_PLAZA_DB_STRUCTURE = [
  {
    META_MALL_PLAZA_USERS: [
      {
        user_id: 1,
        user_camouflage_id: 12,
        user_first_name: "bob",
        user_last_name: "paterson",
        user_email: "bobpaterson@example.com",
        user_email_verified: true,
        user_password: "Password",
        user_phone_number: "+2349022698402",
        user_country: "nigeria",
        user_state: "lagos",
        user_profile_picture:
          "link.api.upload-image-free.app/user/bob/1/2RTHr423ef322P",
        user_dob: "2001-09-03",
        user_location: ["-128.32","12.4354"],
        user_cart: [
          {
            cart_id: 1,
            user_id: 1,
            user_first_name: "bob",
            user_last_name: "paterson",
            user_email: "bobpaterson@example.com",
            user_phone_number: "+2349022698402",
            user_country: "nigeria",
            user_state: "lagos",
            user_landmark: "eiffel tower",
            user_address: "123 Main St",
            user_location: ["-128.32", "12.4354"],
            cart_items: [
              {
                item_id: 1,
                item_store_id: 23,
                item_name: "Product Name",
                item_description: "Product description goes here.",
                item_price: 29.99,
                item_image:
                  "link.api.upload-image-free.app/store/items/1/image.jpg",
                item_category: "Electronics",
                item_stock_quantity: 50,
                item_variants: [
                  {
                    variant_id: 1,
                    variant_name: "Size",
                    variant_options: ["Small", "Medium", "Large"],
                    selected_option: "Medium",
                  },
                  {
                    variant_id: 2,
                    variant_name: "Color",
                    variant_options: ["Red", "Blue", "Green"],
                    selected_option: "Blue",
                  },
                ],
                item_quantity: 2,
                item_created_date: "2001-09-03",
                item_updated_date: "2001-09-03",
              },
            ],
            cart_date: "2001-10-01",
          },
        ],
        user_orders: [
          {
            user_orders_id: 34,
            user_orders_owner_id: 1,
            user_order: [
              {
                cart_id: 1,
                user_id: 1,
                user_first_name: "bob",
                user_last_name: "paterson",
                user_email: "bobpaterson@example.com",
                user_phone_number: "+2349022698402",
                user_country: "nigeria",
                user_state: "lagos",
                user_landmark: "eiffel tower",
                user_address: "123 Main St",
                user_location: ["-128.32", "12.4354"],
                cart_items: [
                  {
                    item_id: 1,
                    item_store_id: 23,
                    item_name: "Product Name",
                    item_description: "Product description goes here.",
                    item_price: 29.99,
                    item_image:
                      "link.api.upload-image-free.app/store/items/1/image.jpg",
                    item_category: "Electronics",
                    item_stock_quantity: 50,
                    item_variants: [
                      {
                        variant_id: 1,
                        variant_name: "Size",
                        variant_options: ["Small", "Medium", "Large"],
                        selected_option: "Medium",
                      },
                      {
                        variant_id: 2,
                        variant_name: "Color",
                        variant_options: ["Red", "Blue", "Green"],
                        selected_option: "Blue",
                      },
                    ],
                    item_quantity: 2,
                    item_created_date: "2001-09-03",
                    item_updated_date: "2001-09-03",
                  },
                ],
                cart_date: "2001-10-01",
              },
            ],
          },
          {
            user_orders_id: 35,
            user_orders_owner_id: 1,
            user_order: [
              {
                cart_id: 1,
                user_id: 1,
                user_first_name: "bob",
                user_last_name: "paterson",
                user_email: "bobpaterson@example.com",
                user_phone_number: "+2349022698402",
                user_country: "nigeria",
                user_state: "abuja",
                user_landmark: "duddy tower",
                user_address: "123 Main St",
                user_location: ["38.322","12.4354"],
                cart_items: [
                  {
                    item_id: 5,
                    item_store_id: 249,
                    item_name: "Lorem Name",
                    item_description: "Lorem Product description goes here.",
                    item_price: 299.99,
                    item_image:
                      "link.api.upload-image-free.app/store/items/10/image.jpg",
                    item_category: "Alcoholic Beverages",
                    item_stock_quantity: 90,
                    item_variants: [
                      {
                        variant_id: 1,
                        variant_name: "Size",
                        variant_options: ["Small", "Medium", "Large"],
                        selected_option: "Large",
                      },
                    ],
                    item_quantity: 12,
                    item_created_date: "2001-09-03",
                    item_updated_date: "2001-09-03",
                  },
                ],
                cart_date: "2001-10-01",
              },
            ],
          },
        ],
        user_joined: "2001-09-03",
        user_favorite_stores: [],
        user_store: [
          {
            store_id: 23,
            owner_store_id: 1,
            store_name: "De Labiche",
            store_motto: "the taste of lulu la",
            store_description:
              "De Labiche sells... i don't know what they sell but i think chat gpt understands this so ill just ignore",
            store_category: "Drug Lords",
            store_website: "",
            store_facebook: "",
            store_instagram: "@anything-they-put",
            store_twitter: "@anything-they-put",
            store_email: "patersonbob@example.com",
            store_number: "+2348140302909",
            store_primary_color: "#f2f2f2",
            store_secondary_color: "#f22",
            store_logo:
              "link.api.upload-image-free.app/store/logo/1/2RTHr423ef322P",
            store_banner:
              "link.api.upload-image-free.app/store/banner/1/2RTHr423ef322P",
            store_special_announcement_video:
              "link.api.upload-image-free.app/store/announcement/video/1/2RTHr423ef322P",
            store_special_announcement_image:
              "link.api.upload-image-free.app/store/announcement/image/1/2RTHr423ef322P",
            store_special_announcement: "",
            store_items: [
              {
                item_id: 1,
                item_store_id: 23,
                item_name: "Product Name",
                item_description: "Product description goes here.",
                item_price: 29.99,
                item_image:
                  "link.api.upload-image-free.app/store/items/1/image.jpg",
                item_category: "Electronics",
                item_stock_quantity: 50,
                item_variants: [
                  {
                    variant_id: 1,
                    variant_name: "Size",
                    variant_options: ["Small", "Medium", "Large"],
                  },
                  {
                    variant_id: 2,
                    variant_name: "Color",
                    variant_options: ["Red", "Blue", "Green"],
                  },
                ],
                item_created_date: "2001-09-03",
                item_updated_date: "2001-09-03",
              },
            ],
            store_orders: [],
            store_verified: true,
            store_total_votes: 8,
            store_voters: [],
            store_rent_paid: true,
            store_last_paid: "2001-09-03",
            store_created_date: "2001-09-03",
            store_updated_date: "2001-09-03",
            store_reported_offense: [
              {
                store_reported_offense_id: 32,
                user_id: 2,
                store_reported_offense_date: "2001-09-03",
                store_reported_offense_message:
                  "your products are fake products",
              },
            ],
          },
        ],
        user_store_owner: true,
      },
    ],
  },
];
