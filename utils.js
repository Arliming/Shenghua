module.exports.resolveRegion = function (region) {
    return region?.split(/[\s-_]/)
      .map(word => {
        if(word.length === 2) return word.toUpperCase()
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
      }).join(" ") ?? "Unknown"
  }