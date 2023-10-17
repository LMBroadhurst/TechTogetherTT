/*
  Warnings:

  - You are about to drop the column `location` on the `Event` table. All the data in the column will be lost.
  - The primary key for the `UserEvent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `cityCountry` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `venue` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attendanceStatus` to the `UserEvent` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "localDateTime" TEXT NOT NULL,
    "cityCountry" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "maxAttendance" INTEGER NOT NULL,
    "description" TEXT,
    "organiserEmail" TEXT,
    CONSTRAINT "Event_organiserEmail_fkey" FOREIGN KEY ("organiserEmail") REFERENCES "User" ("email") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Event" ("id", "localDateTime", "maxAttendance", "name") SELECT "id", "localDateTime", "maxAttendance", "name" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
CREATE TABLE "new_UserEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "attendanceStatus" TEXT NOT NULL,
    "rating" TEXT,
    "review" TEXT,
    CONSTRAINT "UserEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserEvent" ("eventId", "id", "rating", "review", "userId") SELECT "eventId", "id", "rating", "review", "userId" FROM "UserEvent";
DROP TABLE "UserEvent";
ALTER TABLE "new_UserEvent" RENAME TO "UserEvent";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
