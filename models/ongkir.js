module.exports = (sequelize, DataTypes) => {

    const ongkir = sequelize.define("ongkir", {

        subdistrict_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },

        province_id: DataTypes.INTEGER,
        province: DataTypes.STRING,
        city_id: DataTypes.INTEGER,
        city: DataTypes.STRING,
        type: DataTypes.STRING,
        subdistrict_name: DataTypes.STRING

    }, {
        tableName: "ongkir",
        timestamps: false
    });

    return ongkir;
};