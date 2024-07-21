module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("item", {
    itemname: { type: DataTypes.STRING },
    itemdate: { type: DataTypes.DATEONLY },
  });
  return Item;
};
