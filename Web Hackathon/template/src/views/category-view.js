export const toCategoriesView = (categories) => `
<div id="categories">
  <h1>Categories</h1>
  <div class="content">
    ${categories.map(toSingleCategoryView).join('\n')}
  </div>
</div>
`;

const toSingleCategoryView = (category) => `
<div class="category-box">
  <h2>${category.name}</h2>
  <p>${category.moviesCount} movies</p>
  <button class="category-link" data-category-id="${category.id}">View Category</button>
</div>
`;
