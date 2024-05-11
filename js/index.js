// Məhsul kartı yaradılması:
// createProductCard adlı funksiyanı yaradın. Bu funksiya aşağıdakı parametrləri qəbul
// etməlidir:
// ● productName: məhsulun adı olan string.
// ● price: məhsulun qiyməti olan string.
// ● imageUrl: məhsulun şəklinin URL'i olan string.
// Funksiya məhsul kartı yaratmalıdır ki, məhsulun şəklini, adını və qiymətini göstərən bir kart
// və DOM elementi kimi qaytaracaqdır.

// function createProductCard(productName, price, imageUrl) {
//   const div = document.createElement("div");
//   div.style.cssText =
//     "width: 300px; margin: 20px; padding: 20px; border-radius: 20px; background-color: darkgray;";
//   const img = document.createElement("img");
//   img.src = imageUrl;
//   img.style.cssText = "max-width: 100%; height: auto;";
//   div.append(img);
//   const name = document.createElement("h3");
//   name.textContent = productName;
//   div.append(name);
//   const priceElement = document.createElement("p");
//   priceElement.textContent = "Price: " + price + " $";
//   div.append(priceElement);
//   return div;
// }
// const body = document.querySelector("body");
// const product1 = createProductCard(
//   "BMW M5",
//   102000,
//   "https://turbo.azstatic.com/uploads/full/2024%2F05%2F01%2F12%2F32%2F27%2Fcd1ea5a1-cd8b-46ed-be27-104b6967309d%2F64677_XEKjwmAveF1J7d42VxCbsw.jpg"
// );
// const product2 = createProductCard(
//   "Lexus LX 570",
//   28500,
//   "https://turbo.azstatic.com/uploads/full/2024%2F04%2F19%2F11%2F52%2F31%2F4e455422-8f49-4fa8-a002-823a47206f8f%2F14231_J-_dQLKSND7AOyYEFIDxaw.jpg"
// );
// const product3 = createProductCard(
//   "Mercedes S 63",
//   102000,
//   "https://turbo.azstatic.com/uploads/full/2024%2F04%2F02%2F04%2F57%2F40%2Fc4d975ff-a8ec-493d-ac42-9b2c290e0852%2F90393_ODR1trMUn1QUOVEF2iZirw.jpg"
// );
// body.append(product1);
// body.append(product2);
// body.append(product3);

//---------------------------------------------------------------------------------------------------
// Şərh mesajının yaradılması:
// createCommentMessage adlı funksiyanı yaradın. Bu funksiya aşağıdakı parametrləri qəbul
// etməlidir:
// ● author: şərh yazarının adı olan string.
// ● message: şərh mətni olan string.
// ● timestamp: şərh vaxt damğası olan string.
// Funksiya şərh mesajını yaratmalıdır ki, müəllifin adını, şərh mətnini və vaxt damğasını
// göstərən bir mesaj və DOM elementi kimi qaytaracaqdır.

// function createCommentMessage(author, message, timestamp) {
//   const container = document.createElement("div");
//   const div = document.createElement("div");

//   const new_author = document.createElement("label");
//   const new_time = document.createElement("label");
//   const new_message = document.createElement("p");
//   new_author.textContent = author;
//   new_message.textContent = message;
//   new_time.textContent = timestamp;

//   div.style.cssText = "display: flex; justify-content: space-between;";
//   container.style.cssText =
//     "margin: 20px; padding: 20px; border-radius: 10px; background-color: rgb(255, 208, 0);";
//   div.append(new_author);
//   div.append(new_time);
//   container.append(div);
//   container.append(new_message);
//   return container;
// }
// const body = document.querySelector("body");

// const message1 = createCommentMessage(
//   "Ilon Mask",
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, facereliquid velit beatae perferendis nesciunt magnam nobis dignissimos! Sed,vero!",
//   "14:00"
// );
// const message2 = createCommentMessage(
//   "Ceff Bezos",
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, facereliquid velit beatae perferendis nesciunt magnam nobis dignissimos! Sed,vero!",
//   "14:10"
// );

// const message3 = createCommentMessage(
//   "Bill Qeyst",
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, facereliquid velit beatae perferendis nesciunt magnam nobis dignissimos! Sed,vero!",
//   "14:20"
// );
// const message4 = createCommentMessage(
//   "Maykl Blumberq",
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, facereliquid velit beatae perferendis nesciunt magnam nobis dignissimos! Sed,vero!",
//   "14:30"
// );
// body.append(message1);
// body.append(message2);
// body.append(message3);
// body.append(message4);

//--------------------------------------------------------------------------------------------------

// Menyu elementinin yaradılması:
// createMenuItem adlı funksiyanı yaradın. Bu funksiya aşağıdakı parametrləri qəbul etməlidir:
// ● name: menyuda yeməyin adı olan string.
// ● price: yeməyin qiyməti olan string.
// ● description: yeməyin təsviri olan string.
// Funksiya menyuda yeməyin adını, qiymətini və təsvirini göstərən bir element və DOM
// elementi kimi qaytaracaqdır.

// function createMenuItem(name, price, description) {
//   const container = document.createElement("div");
//   const food_name = document.createElement("h3");
//   const food_price = document.createElement("label");
//   const food_description = document.createElement("p");
//   container.style.cssText =
//     "width: 200px; margin: 20px; padding: 20px; border-radius: 20px;background-color: darkorchid; ";
//   food_name.textContent = name;
//   food_price.textContent = price + " manat";
//   food_description.textContent = description;
//   food_name.style.color = "white";
//   food_price.style.color = "white";
//   food_description.style.color = "white";
//   container.append(food_name);
//   container.append(food_price);
//   container.append(food_description);
//   return container;
// }
// const body = document.querySelector("body");
// const food1 = createMenuItem(
//   "Piti",
//   6,
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perspiciatis quis quaerat corrupti sed ullam saepe, non nihil, distinctio voluptatum porro amet repudiandae? Enim nam nemo deserunt veritatis autem atque."
// );
// const food2 = createMenuItem(
//   "Yarpaq dolmasi",
//   5,
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perspiciatis quis quaerat corrupti sed ullam saepe, non nihil, distinctio voluptatum porro amet repudiandae? Enim nam nemo deserunt veritatis autem atque."
// );
// const food3 = createMenuItem(
//   "Levengi",
//   8,
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perspiciatis quis quaerat corrupti sed ullam saepe, non nihil, distinctio voluptatum porro amet repudiandae? Enim nam nemo deserunt veritatis autem atque."
// );
// body.append(food1);
// body.append(food2);
// body.append(food3);
