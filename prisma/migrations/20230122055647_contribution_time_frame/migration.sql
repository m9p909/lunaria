/*
  Warnings:

  - Added the required column `contributionTimeFrame` to the `Goal` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Goal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" INTEGER NOT NULL,
    "deadline" DATETIME NOT NULL,
    "contributionFrequency" INTEGER NOT NULL,
    "contributionTimeFrame" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Goal" ("amount", "contributionFrequency", "deadline", "id", "userId") SELECT "amount", "contributionFrequency", "deadline", "id", "userId" FROM "Goal";
DROP TABLE "Goal";
ALTER TABLE "new_Goal" RENAME TO "Goal";
CREATE UNIQUE INDEX "Goal_userId_key" ON "Goal"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
