import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Music extends Model {
  declare id: number;
  declare nome: string;
  
  // Metodo que vai ser utilizado nas respostas de musicas
	public convertToResponse(): { id: number; name: string; } {
		return {
			id: this.id,
			name: this.nome
		}
	}
}

Music.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'Music',
    tableName: "musics",
    timestamps: true,
  },
)