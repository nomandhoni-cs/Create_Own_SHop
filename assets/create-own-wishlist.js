document.addEventListener('DOMContentLoaded', function () {
  function toggleFavorite(productData) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const index = favorites.findIndex((item) => item.id === productData.id);
    if (index === -1) {
      favorites.push(productData);
    } else {
      favorites.splice(index, 1);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  document.querySelectorAll('.heart-icon').forEach(function (icon) {
    icon.addEventListener('click', function (event) {
      event.preventDefault();

      const productData = {
        id: this.getAttribute('data-product-id'),
        title: this.getAttribute('data-product-title'),
        url: this.getAttribute('data-product-url'),
        price: this.getAttribute('data-product-price'),
        compare_at_price: this.getAttribute('data-product-compare-at-price'),
        type: this.getAttribute('data-product-type'),
        vendor: this.getAttribute('data-product-vendor'),
        available: this.getAttribute('data-product-available') === 'true',
        created_at: this.getAttribute('data-product-created-at'),
        description: this.getAttribute('data-product-description'),
        handle: this.getAttribute('data-product-handle'),
        collections: this.getAttribute('data-product-collections')?.split(','),
        tags: this.getAttribute('data-product-tags')?.split(','),
      };

      toggleFavorite(productData);
      this.classList.toggle('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const wishlistCountElement = document.getElementById('wishlist-count');

  function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('favorites')) || [];
    wishlistCountElement.textContent = wishlist.length;
    wishlistCountElement.style.display = wishlist.length > 0 ? 'inline-block' : 'none';
  }

  function toggleFavorite(productData) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.findIndex((item) => item.id === productData.id);

    if (index === -1) {
      favorites.push(productData);
    } else {
      favorites.splice(index, 1);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateWishlistCount();
  }

  // Initialize count on page load
  updateWishlistCount();

  document.querySelectorAll('.heart-icon').forEach(function (icon) {
    icon.addEventListener('click', function (event) {
      event.preventDefault();

      const productData = {
        id: this.getAttribute('data-product-id'),
        title: this.getAttribute('data-product-title'),
        url: this.getAttribute('data-product-url'),
        price: this.getAttribute('data-product-price'),
        // other data attributes as needed
      };

      toggleFavorite(productData);
      this.classList.toggle('active');
    });
  });
});
