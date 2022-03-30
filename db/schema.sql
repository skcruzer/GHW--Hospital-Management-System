DROP DATABASE IF EXISTS hsm_db;

CREATE DATABASE hsm_db;

-- Medical History 

MedicalHistory.init({
    patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    year: {
        type: DataTypes.TIMESTAMP,
        allowNull: false
    },
    condition: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surgeries: {
        type: DataTypes.STRING,
        allowNull: false
    },
    medication: {
        type: DataTypes.STRING,
        allowNull: false
    }
})