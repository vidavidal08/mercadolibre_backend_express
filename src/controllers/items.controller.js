const requestify = require('requestify');


exports.findAll = function (req, res) {
  const item = req.query.q;// item in queryString

  requestify.get(`https://api.mercadolibre.com/sites/MLA/search?q=${item}`)
    .then(function (response) {
      // Get the response body (JSON parsed or jQuery object for XMLs)
      const data = response.getBody();
      const items = data.results;
      const categoriesML = data.filters;
      let newJson = [];
      let itemsML = [];
      let price = [];
      let categories = [];

      if (categoriesML !== undefined && categoriesML.length > 0) {
        // console.log("categoriesML",categoriesML[0].values[0].path_from_root);
        let path_from_root = categoriesML[0].values[0].path_from_root;

        for (let x = 0; x < path_from_root.length; x++) {
          categories.push({
            name: path_from_root[x].name
          });

        }
      }


      for (let i = 0; i < 4; i++) {
        price.push({
          currency: items[i].prices.prices[0].currency_id,
          amount: items[i].prices.prices[0].amount,
          decimals: "00"
        });

        itemsML.push({
          id: items[i].id,
          title: items[i].title,
          price: price[i],
          picture: items[i].thumbnail,
          condition: items[i].condition,
          free_shipping: items[i].shipping.free_shipping,
          address: items[i].address.state_name //It´s necessary to show in the view in react

        });

      }

      newJson.push({
        author: {
          name: "Guadalupe",
          lastname: "Vidal Cruz"
        },
        categories: categories,
        items: itemsML
      });

      res.json(newJson);
    }
    );
};

exports.descripcionById = function (req, res) {
  let newJson = [];
  const id = req.params.id;// item in params
  ;
  requestify.get(`https://api.mercadolibre.com/items/${id}`)
    .then(function (response) {
      // Get the response body (JSON parsed or jQuery object for XMLs)
      const data = response.getBody();
      const idCategory = data.category_id;

      newJson.push({
        author: {
          name: "Guadalupe",
          lastname: "Vidal Cruz"
        },
        item: {
          id: data.id,
          title: data.title,
          price: {
            currency: data.currency_id,
            amount: data.price,
            decimals: "00"
          }
        },
        picture: data.thumbnail,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        description: "",
        categories: idCategory

      });

      return newJson;

    }).then(function (newJson) {
      requestify.get(`https://api.mercadolibre.com/items/${id}/description`)
        .then(function (response2) {
          const data2 = response2.getBody()

          const description = data2.plain_text;
          newJson[0].description = description;
          console.log(newJson[0]);
          return newJson;

        }).then(function (newJson) {
          const idCategory = newJson[0].categories;
          requestify.get(`https://api.mercadolibre.com/categories/${idCategory}`)
            .then(function (response3) {
              // Get the response body (JSON parsed or jQuery object for XMLs)
              const data3 = response3.getBody();
              console.log("getCategories", data3);

              const categories = data3.path_from_root;
              newJson[0].categories = categories;
              res.json(newJson);

            });
        });
    });
};


