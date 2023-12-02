export class Food {
  constructor(
    private id: string,
    private name: string,
    private calorie: number,
    private mineral: number,
    private protein: number,
    private fiber: number,
  ) {}
}

/**
 * model Food {
  id String @id @default(uuid())
  name String
  calorie Float
  mineral Float
  protein Float
  fiber Float

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  userFood UserFood[]
}
 */
