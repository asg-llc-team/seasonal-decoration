import { ChinggisDayRibbon } from './chinggis-day/ribbon';
import { isChinggisDaySeason } from './chinggis-day/season';
import { isNaadamSeason } from './naadam/season';
import { NaadamRibbon } from './naadam/ribbon';
import { isNewYearSeason } from './new-year/season';
import { NewYearTree } from './new-year/tree';
import { Snowfall } from './new-year/snowfall';
import { RepublicDayRibbon } from './republic-day/ribbon';
import { isRepublicDaySeason } from './republic-day/season';
import { isSchoolYearSeason } from './school-year/season';
import { SchoolYearRibbon } from './school-year/ribbon';

/**
 * Site-wide seasonal decorations. Each holiday lives in its own subfolder
 * with season.ts (date logic) and ribbon.tsx (or other UI).
 */
export function SeasonalDecoration() {
  return (
    <>
      {isNewYearSeason() && (
        <>
          <Snowfall />
          <NewYearTree />
        </>
      )}
      {isNaadamSeason() && <NaadamRibbon />}
      {isSchoolYearSeason() && <SchoolYearRibbon />}
      {isChinggisDaySeason() && <ChinggisDayRibbon />}
      {isRepublicDaySeason() && <RepublicDayRibbon />}
    </>
  );
}
