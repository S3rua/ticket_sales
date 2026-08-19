const diskonModel = require("../models").diskon;

// GET semua data
exports.getAllDiskon = async (request, response) => {
    try {
        let diskon = await diskonModel.findAll();

        return response.json({
            success: true,
            data: diskon,
            message: "All discount has been loaded"
        });
    } catch (error) {
        return response.json({
            success: false,
            message: error.message
        });
    }
};

// POST tambah data
exports.addDiskon = async (request, response) => {
    try {
        let newDiskon = {
            nama_diskon: request.body.nama_diskon,
            nominal_diskon: request.body.nominal_diskon
        };

        await diskonModel.create(newDiskon);

        return response.json({
            success: true,
            message: "New discount has been inserted"
        });
    } catch (error) {
        return response.json({
            success: false,
            message: error.message
        });
    }
};

// PUT update data
exports.updateDiskon = async (request, response) => {
    try {
        let id = request.params.id;

        let data = {
            nama_diskon: request.body.nama_diskon,
            nominal_diskon: request.body.nominal_diskon
        };

        await diskonModel.update(data, {
            where: {
                id_diskon: id
            }
        });

        return response.json({
            success: true,
            message: "Discount has been updated"
        });
    } catch (error) {
        return response.json({
            success: false,
            message: error.message
        });
    }
};

// DELETE data
exports.deleteDiskon = async (request, response) => {
    try {
        let id = request.params.id;

        await diskonModel.destroy({
            where: {
                id_diskon: id
            }
        });

        return response.json({
            success: true,
            message: "Discount has been deleted"
        });
    } catch (error) {
        return response.json({
            success: false,
            message: error.message
        });
    }
};