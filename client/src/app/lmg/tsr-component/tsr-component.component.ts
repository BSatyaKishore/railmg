import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tsr-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tsr-component.component.html',
  styleUrl: './tsr-component.component.css'
})
export class TsrComponentComponent {
  selectedDate = "2024-06-05";
  dataArray = [
    { section: "CGS-GHY (Up)", sectionLength: 21.94, totalEngg: 13.5, eta: 0, extraEngg: 13.5, miscAccount: 0, constAccount: 10.6, reWork: 1.9, totalExtraTimeLoss: 26.1 },
    { section: "CGS-GHY (Dn)", sectionLength: 21.94, totalEngg: 13.5, eta: 0, extraEngg: 13.5, miscAccount: 0, constAccount: 1.5, reWork: 1.9, totalExtraTimeLoss: 17 },
    { section: "LMG-GHY (Dn)", sectionLength: 180.59, totalEngg: 7.8, eta: 11, extraEngg: 0, miscAccount: 6.1, constAccount: 0, reWork: 0, totalExtraTimeLoss: 2.9 },
    { section: "GHY-LMG (Up)", sectionLength: 180.59, totalEngg: 13.5, eta: 11, extraEngg: 2.5, miscAccount: 6.1, constAccount: 0, reWork: 0, totalExtraTimeLoss: 8.6 },
    { section: "LMG-FKG", sectionLength: 138.85, totalEngg: 14.6, eta: 8, extraEngg: 6.6, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 6.6 },
    { section: "PKB-MYD", sectionLength: 8.7, totalEngg: 0, eta: 0, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
    { section: "LMG-BPB-SCL", sectionLength: 198.79, totalEngg: 43, eta: 12, extraEngg: 31, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 31 },
    { section: "BPB-KXJ-AGTL", sectionLength: 223.87, totalEngg: 18.7, eta: 12, extraEngg: 6.7, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 6.7 },
    { section: "CPK-SCE-HBN", sectionLength: 25.18, totalEngg: 2.1, eta: 2, extraEngg: 0.1, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0.1 },
    { section: "SCE-HBN-MBO", sectionLength: 48.98, totalEngg: 2.1, eta: 3, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
    { section: "SCE-SHTT", sectionLength: 61.18, totalEngg: 0, eta: 4, extraEngg: 0, miscAccount: 14, constAccount: 0, reWork: 0, totalExtraTimeLoss: 10 },
    { section: "KTX-BHRB", sectionLength: 83.55, totalEngg: 19.5, eta: 5, extraEngg: 14.5, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 14.5 },
    { section: "ARCL-VNGP", sectionLength: 61, totalEngg: 16.7, eta: 4, extraEngg: 12.7, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 12.7 },
    { section: "KXJ-MSSN", sectionLength: 10.13, totalEngg: 0, eta: 2, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
    { section: "BRGM-DLCR", sectionLength: 51.14, totalEngg: 0, eta: 2, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
    { section: "AGTL-JRJE", sectionLength: 52.21, totalEngg: 4.3, eta: 4, extraEngg: 0.3, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0.3 },
    { section: "JRJE-SABROOM", sectionLength: 23.33, totalEngg: 0, eta: 5, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
    { section: "TTLA-BYRNIHAT", sectionLength: 20.15, totalEngg: 0, eta: 0, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
    { section: "NKMG-KGBC", sectionLength: null, totalEngg: 0, eta: 0, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 }
  ];
  totalSectionLength = 181.7;

  updateDataArrayForSelectedDate() {
    const dateMapping = {
      "2024-06-05": [
        { section: "CGS-GHY (Up)", sectionLength: 21.94, totalEngg: 13.5, eta: 0, extraEngg: 13.5, miscAccount: 0, constAccount: 10.6, reWork: 1.9, totalExtraTimeLoss: 26.1 },
        { section: "CGS-GHY (Dn)", sectionLength: 21.94, totalEngg: 13.5, eta: 0, extraEngg: 13.5, miscAccount: 0, constAccount: 1.5, reWork: 1.9, totalExtraTimeLoss: 17 },
        { section: "LMG-GHY (Dn)", sectionLength: 180.59, totalEngg: 7.8, eta: 11, extraEngg: 0, miscAccount: 6.1, constAccount: 0, reWork: 0, totalExtraTimeLoss: 2.9 },
        { section: "GHY-LMG (Up)", sectionLength: 180.59, totalEngg: 13.5, eta: 11, extraEngg: 2.5, miscAccount: 6.1, constAccount: 0, reWork: 0, totalExtraTimeLoss: 8.6 },
        { section: "LMG-FKG", sectionLength: 138.85, totalEngg: 14.6, eta: 8, extraEngg: 6.6, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 6.6 },
        { section: "PKB-MYD", sectionLength: 8.7, totalEngg: 0, eta: 0, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
        { section: "LMG-BPB-SCL", sectionLength: 198.79, totalEngg: 43, eta: 12, extraEngg: 31, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 31 },
        { section: "BPB-KXJ-AGTL", sectionLength: 223.87, totalEngg: 18.7, eta: 12, extraEngg: 6.7, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 6.7 },
        { section: "CPK-SCE-HBN", sectionLength: 25.18, totalEngg: 2.1, eta: 2, extraEngg: 0.1, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0.1 },
        { section: "SCE-HBN-MBO", sectionLength: 48.98, totalEngg: 2.1, eta: 3, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
        { section: "SCE-SHTT", sectionLength: 61.18, totalEngg: 0, eta: 4, extraEngg: 0, miscAccount: 14, constAccount: 0, reWork: 0, totalExtraTimeLoss: 10 },
        { section: "KTX-BHRB", sectionLength: 83.55, totalEngg: 19.5, eta: 5, extraEngg: 14.5, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 14.5 },
        { section: "ARCL-VNGP", sectionLength: 61, totalEngg: 16.7, eta: 4, extraEngg: 12.7, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 12.7 },
        { section: "KXJ-MSSN", sectionLength: 10.13, totalEngg: 0, eta: 2, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
        { section: "BRGM-DLCR", sectionLength: 51.14, totalEngg: 0, eta: 2, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
        { section: "AGTL-JRJE", sectionLength: 52.21, totalEngg: 4.3, eta: 4, extraEngg: 0.3, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0.3 },
        { section: "JRJE-SABROOM", sectionLength: 23.33, totalEngg: 0, eta: 5, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
        { section: "TTLA-BYRNIHAT", sectionLength: 20.15, totalEngg: 0, eta: 0, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
        { section: "NKMG-KGBC", sectionLength: null, totalEngg: 0, eta: 0, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 }
      ],
      "2024-06-04": [
        { section: "CGS-GHY (Up)", sectionLength: 21.94, totalEngg: 13.5, eta: 0, extraEngg: 13.5, miscAccount: 0, constAccount: 10.6, reWork: 1.9, totalExtraTimeLoss: 26.1 },
        { section: "CGS-GHY (Dn)", sectionLength: 21.94, totalEngg: 13.5, eta: 0, extraEngg: 13.5, miscAccount: 0, constAccount: 1.5, reWork: 1.9, totalExtraTimeLoss: 17 },
        { section: "LMG-GHY (Dn)", sectionLength: 180.59, totalEngg: 9.6, eta: 11, extraEngg: 0, miscAccount: 6.1, constAccount: 0, reWork: 0, totalExtraTimeLoss: 4.7 },
        { section: "GHY-LMG (Up)", sectionLength: 180.59, totalEngg: 19.5, eta: 11, extraEngg: 8.5, miscAccount: 6.1, constAccount: 0, reWork: 0, totalExtraTimeLoss: 14.6 },
        { section: "LMG-FKG", sectionLength: 138.85, totalEngg: 16.2, eta: 8, extraEngg: 8.2, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 8.2 },
        { section: "PKB-MYD", sectionLength: 8.7, totalEngg: 0, eta: 0, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
        { section: "LMG-BPB-SCL", sectionLength: 198.79, totalEngg: 46.1, eta: 12, extraEngg: 34.1, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 34.1 },
        { section: "BPB-KXJ-AGTL", sectionLength: 223.87, totalEngg: 18.7, eta: 12, extraEngg: 6.7, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 6.7 },
        { section: "CPK-SCE-HBN", sectionLength: 25.18, totalEngg: 2.1, eta: 2, extraEngg: 0.1, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0.1 },
        { section: "SCE-HBN-MBO", sectionLength: 48.98, totalEngg: 2.1, eta: 3, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
        { section: "SCE-SHTT", sectionLength: 61.18, totalEngg: 0, eta: 4, extraEngg: 0, miscAccount: 14, constAccount: 0, reWork: 0, totalExtraTimeLoss: 10 },
        { section: "KTX-BHRB", sectionLength: 83.55, totalEngg: 19.5, eta: 5, extraEngg: 14.5, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 14.5 },
        { section: "ARCL-VNGP", sectionLength: 61, totalEngg: 16.7, eta: 4, extraEngg: 12.7, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 12.7 },
        { section: "KXJ-MSSN", sectionLength: 10.13, totalEngg: 0, eta: 2, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
        { section: "BRGM-DLCR", sectionLength: 51.14, totalEngg: 0, eta: 2, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
        { section: "AGTL-JRJE", sectionLength: 52.21, totalEngg: 4.3, eta: 4, extraEngg: 0.3, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0.3 },
        { section: "JRJE-SABROOM", sectionLength: 23.33, totalEngg: 0, eta: 5, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
        { section: "TTLA-BYRNIHAT", sectionLength: 20.15, totalEngg: 0, eta: 0, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 },
        { section: "NKMG-KGBC", sectionLength: null, totalEngg: 0, eta: 0, extraEngg: 0, miscAccount: 0, constAccount: 0, reWork: 0, totalExtraTimeLoss: 0 }
      ]
    };
    const totalMapping = {
      "2024-06-05": 181.7,
      "2024-06-04": 194.1,
    }

    if (dateMapping[this.selectedDate]) {
      this.dataArray = dateMapping[this.selectedDate];
      this.totalSectionLength = totalMapping[this.selectedDate];
    } else {
      console.warn("No data available for selected date");
    }
  }

  onDateChange(event: any) {
    this.selectedDate = event.target.value;
    console.log(event.target.value);
    this.updateDataArrayForSelectedDate();
  }
}
