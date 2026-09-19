// Newshub API client stub
window.NewshubAPI = {
  fetchMarkets: async function() {
    try {
      const res = await fetch('/api/markets');
      return await res.json();
    } catch(e) {
      console.error(e);
      return null;
    }
  }
};
