const customGridSchema = {
  title: "Custom Grid",
  type: "object",
  properties: {
    gridType: {
      title: "Grid type",
      type: "number",
      enum: [
        1,
        2,
        3,
        4,
        5
      ]
    }
  }
}

export default customGridSchema
