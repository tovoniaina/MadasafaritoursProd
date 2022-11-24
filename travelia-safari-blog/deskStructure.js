import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Documents Blog")
            .items([
              S.listItem()
                .title("Category")
                .child(S.documentTypeList("category")),
              S.listItem().title("Author").child(S.documentTypeList("author")),
              S.listItem().title("Posts").child(S.documentTypeList("post")),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "picturesHome",
            "picturesTour",
            "picturesAboutUs",
            "picturesMada",
            "picturesHeaderFooter",
            "picturesGallery",
            "post",
            "author",
            "category",
            "siteSettings",
            "navigation",
            "colors",
            "caroussel",
          ].includes(listItem.getId())
      ),

      S.listItem()
        .title("Pictures")
        .child(
          S.list()
            .title("All pictures management")
            .items([
              S.listItem()
                .title("Pictures Home")
                .child(S.documentTypeList("picturesHome")),
              S.listItem()
                .title("Pictures Tours")
                .child(S.documentTypeList("picturesTour")),
              S.listItem()
                .title("Pictures About Us")
                .child(S.documentTypeList("picturesAboutUs")),
              S.listItem()
                .title("Pictures Gallery Photo")
                .child(S.documentTypeList("picturesGallery")),
              S.listItem()
                .title("Pictures Header Footer")
                .child(S.documentTypeList("picturesHeaderFooter")),
              S.listItem()
                .title("Pictures Mada")
                .child(S.documentTypeList("picturesMada")),
              S.listItem()
              .title("Caroussel Pictures")
              .child(S.documentTypeList("caroussel")),
            ])
        ),
    ]);
