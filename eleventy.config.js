module.exports = function(eleventyConfig) {
    // Copy admin folder to output
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("_includes/assets/");
  
    return {
      dir: {
        input: ".",
        output: "_site",
        includes: "_includes"
      }
    };
  };