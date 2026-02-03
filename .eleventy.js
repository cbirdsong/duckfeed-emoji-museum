export default async function (eleventyConfig) {
  // Passthrough
  eleventyConfig.addPassthroughCopy("src");
  eleventyConfig.addPassthroughCopy("images");

  // Watch targets
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/js/");

  var pathPrefix = "";
  if (process.env.GITHUB_REPOSITORY) {
    pathPrefix = process.env.GITHUB_REPOSITORY.split("/")[1];
  }

  return {
    dir: {
      input: ".",
    },
    pathPrefix,
  };
}
