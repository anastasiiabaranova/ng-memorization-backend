import { InMemoryDBEntity } from "@nestjs-addons/in-memory-db"

export class CardEntity implements InMemoryDBEntity {
  id: string;
  name: string;
  description: string;
}