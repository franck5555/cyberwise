interface ScannerChecklist {
  id: string;
  title: string;
  description: string;
  isChecked: boolean;
}

interface ScannerData {
  userId: string;
  timestamp: Date;
  securityScore: number;
  findings: string[];
  recommendations: string[];
  checklist: ScannerChecklist[];
}

export type { ScannerChecklist, ScannerData };