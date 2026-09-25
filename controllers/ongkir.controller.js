const { ongkir } = require("../models");

exports.getAllOngkir = async (request, response) => {
    try {
        let data = await ongkir.findAll();

        return response.json({
            success: true,
            data: data,
            message: "All ongkir has been loaded"
        });
    } catch (error) {
        return response.json({
            success: false,
            message: error.message
        });
    }
};

exports.addOngkir = (request, response) => {
    let newOngkir = {
        subdistrict_id: request.body.subdistrict_id,
        province_id: request.body.province_id,
        province: request.body.province,
        city_id: request.body.city_id,
        city: request.body.city,
        type: request.body.type,
        subdistrict_name: request.body.subdistrict_name
    };

    ongkir
        .create(newOngkir)
        .then((result) => {
            return response.json({
                success: true,
                data: result,
                message: "New ongkir has been inserted"
            });
        })
        .catch((error) => {
            return response.json({
                success: false,
                message: error.message
            });
        });
};

exports.updateOngkir = (request, response) => {
    let dataOngkir = {
        province_id: request.body.province_id,
        province: request.body.province,
        city_id: request.body.city_id,
        city: request.body.city,
        type: request.body.type,
        subdistrict_name: request.body.subdistrict_name
    };

    let subdistrict_id = request.params.id;

    ongkir
        .update(dataOngkir, {
            where: {
                subdistrict_id: subdistrict_id
            }
        })
        .then((result) => {
            return response.json({
                success: true,
                message: "Data ongkir has been updated"
            });
        })
        .catch((error) => {
            return response.json({
                success: false,
                message: error.message
            });
        });
};

exports.deleteOngkir = (request, response) => {
    let subdistrict_id = request.params.id;

    ongkir
        .destroy({
            where: {
                subdistrict_id: subdistrict_id
            }
        })
        .then((result) => {
            return response.json({
                success: true,
                message: "Data ongkir has been deleted"
            });
        })
        .catch((error) => {
            return response.json({
                success: false,
                message: error.message
            });
        });
};