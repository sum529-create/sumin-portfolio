/**
 * 소개 section text
 */

// 텍스트 강조 스타일 타입 정의
type HighLightStyle = string;

// 텍스트 공통 베이스 스타일
const BASE_HIGHLIGHT_STYLE: HighLightStyle = "px-2 py-1 rounded-lg border font-medium";

// 색상별 강조 스타일 생성 함수
const createHighlightStyle = (color:string): HighLightStyle => `text-${color}-light bg-${color}/8 ${BASE_HIGHLIGHT_STYLE} border-${color}/30`;

export const TEAL_HIGHLIGHT:HighLightStyle = createHighlightStyle("teal");
export const PURPLE_HIGHLIGHT:HighLightStyle = createHighlightStyle("purple");
export const PINK_HIGHLIGHT:HighLightStyle = createHighlightStyle("accent");