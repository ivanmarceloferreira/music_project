import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class User extends Model {
  declare id: number;
  declare nome: string;
  declare email: string;
  declare password: string;

  // Metodo que vai ser utilizado nas respostas de musicas
  public convertToResponse(): {
    id: number;
    name: string;
    email: string;
    password: string;
  } {
    return {
      id: this.id,
      name: this.nome,
      email: this.email,
      password: this.password,
    };
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
  },
);
