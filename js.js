import { renderCard } from "./renderCard.js";

const cardContainer = document.querySelector(".card_container");

const urlBreeds = "https://api.thecatapi.com/v1/breeds";

const data2 =
  "https://api.thecatapi.com/v1/images/search?api_key=live_6Fly0K4NU6vIt5n2ezn77g3XtQ20a6APfWjl8XZHjCHCygkm5Xny6KbW24gn3gTN&limit=5";

async function returnAllBreeds(url) {
  const sendRequest = await fetch(url);
  const jsonReceived = await sendRequest.json();
  const rawDataBreed = [];
  for (let breed of jsonReceived) {
    rawDataBreed.push(breed.id);
  }
  return rawDataBreed;
}

async function getData(url) {
  let allWidthsAreValid = false;
  const br = await returnAllBreeds(urlBreeds);

  const allBreedsConcatenated = url.concat(`&breed_ids=${br}`);

  while (!allWidthsAreValid) {
    const response = await fetch(allBreedsConcatenated);
    const data = await response.json();
    // console.log(data);
    // Kontrola, či všetky objekty majú width >= 300
    allWidthsAreValid = data.every((obj) => obj.width >= 500);

    if (allWidthsAreValid) {
      renderCard(data);
      const objectsToCollect = [];
      let stored = false;
      const favouritesBtn = document.querySelectorAll(".favButton");

      favouritesBtn.forEach((button) => {
        button.addEventListener("click", function (e) {
          const searchedItem = e.target.closest(".card");
          const foundObject = data.find((element) => {
            return element.id === searchedItem.id;
          });

          if (stored && searchedItem.id) {
            localStorage.setItem(searchedItem.id, JSON.stringify(foundObject));
            stored = true;
            console.log(localStorage.getItem(searchedItem) === true);
          } else {
            localStorage.removeItem(searchedItem.id);
            stored = false;
            console.log(stored);
          }
          const notificationMessage = document.createElement("span");
          notificationMessage.innerHTML = "";
        });
      });

      // cardContainer.addEventListener("click", function (e) {
      // const foundObject = data.find((element) => {
      //   return element.id === e.target.closest(".card").id;
      // });
      // console.log(foundObject);
      // console.log(JSON.stringify(foundObject));
      // fetch("http://httpbin.org/post", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     // "x-api-key":
      //     //   "live_6Fly0K4NU6vIt5n2ezn77g3XtQ20a6APfWjl8XZHjCHCygkm5Xny6KbW24gn3gTN",
      //   },
      //   body: JSON.stringify(foundObject),
      // })
      //   .then((response) => {
      //     // Log the raw response text to see what is being returned
      //     return response.text().then((text) => {
      //       console.log("Raw response:", text);
      //       try {
      //         // Try to parse the text as JSON
      //         return JSON.parse(text);
      //       } catch (error) {
      //         // If parsing fails, throw an error
      //         throw new Error("Failed to parse JSON: " + error.message);
      //       }
      //     });
      //   })
      //   .then((foundObject) => {
      //     console.log("Success:", foundObject);
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error);
      //   });
      // });
    }

    // Počkajte krátky čas pred opakovaným načítaním, aby sa zabránilo rýchlym a nepretržitým požiadavkám
    await new Promise((resolve) => setTimeout(resolve, 100)); // počkať 1 sekundu
  }
}

async function initializeWebsite() {
  await getData(data2);
}

initializeWebsite();

// const arrayOfData = [{ key1: "val1" }, { key2: "val2" }, { key3: "val3" }];

// const data00 = JSON.stringify(arrayOfData);

// fetch("http://httpbin.org/post", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     // "x-api-key":
//     //   "live_6Fly0K4NU6vIt5n2ezn77g3XtQ20a6APfWjl8XZHjCHCygkm5Xny6KbW24gn3gTN",
//   },
//   body: data00,
// })
//   .then((response) => {
//     // Log the raw response text to see what is being returned
//     return response.text().then((text) => {
//       console.log("Raw response:", text);
//       try {
//         // Try to parse the text as JSON
//         return JSON.parse(text);
//       } catch (error) {
//         // If parsing fails, throw an error
//         throw new Error("Failed to parse JSON: " + error.message);
//       }
//     });
//   })
//   .then((foundObject) => {
//     console.log("Success:", foundObject);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
