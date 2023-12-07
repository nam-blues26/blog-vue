<template>
        <div class="container mt-5 mb-5">
          <div class="row">
            <div class="col-md-6 pb-4" v-for="(card, index) in cardList" :key="index">
              <div class="card">
                <div class="card-image">
                        <img :src="card.image" class="card-img-top" alt="Card Image">

                </div>
                <div class="card-body">
                  <h5 class="card-title">{{ card.title }}</h5>
                  <p class="card-text">{{ card.description }}</p>
                  <router-link :to="`/details/${index}`" class="btn btn-custome d-flex align-items-center" style="width:fit-content;">
                    <span>See More</span>
                    <span class="material-icons ml-2">
                      pan_tool_alt
                    </span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      
      <script>
      export default {
        data() {
          return {
            cardList: [
              {
                title: 'Card 1',
                description: 'Description for Card 1.',
                image: 'path/to/image1.jpg',
              },
              {
                title: 'Card 2',
                description: 'Description for Card 2.',
                image: 'path/to/image2.jpg',
              },
              {
                title: 'Card 2',
                description: 'Description for Card 2.',
                image: 'path/to/image2.jpg',
              },
              // Add more cards as needed
            ],
          };
        },
      };
      </script>
      
      <style scoped>
        .card-image{
                height: 300px;
        }
      </style>
      