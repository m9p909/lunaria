-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Goal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" INTEGER NOT NULL,
    "deadline" DATETIME NOT NULL,
    "contributionFrequency" INTEGER NOT NULL,
    "contributionTimeFrame" TEXT NOT NULL,
    "amountSaved" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Goal" ("amount", "amountSaved", "contributionFrequency", "contributionTimeFrame", "deadline", "id", "userId") SELECT "amount", "amountSaved", "contributionFrequency", "contributionTimeFrame", "deadline", "id", "userId" FROM "Goal";
DROP TABLE "Goal";
ALTER TABLE "new_Goal" RENAME TO "Goal";
CREATE UNIQUE INDEX "Goal_userId_key" ON "Goal"("userId");
CREATE INDEX "Goal_userId_idx" ON "Goal"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
