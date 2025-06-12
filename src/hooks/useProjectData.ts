import { useState, useEffect } from 'react';
import { ProjectDetail } from '@/types/project';

export const useProjectDetail = (projectId: string) => {
  const [projectDetail, setProjectDetail] = useState<ProjectDetail | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getObjectData = (projectId: string) => {
    switch (projectId) {
      case 'uuno':
        return 'uunoDetail';
      case 'green-deal':
        return 'greenDealDetail';
      case 'medi-click':
        return 'mediClickDetail';
      case 'lol-stats-tracker':
        return 'lolStatsTrackerDetail';
      default:
        return 'portfolioDetail';
    }
  };

  const projectFileName = getObjectData(projectId);

  useEffect(() => {
    const loadProjectDetail = async () => {
      try {
        setLoading(true);

        const module = await import(`@/data/projects/${projectId}`);
        setProjectDetail(module[projectFileName]);
      } catch (err) {
        setError(`프로젝트 데이터를 불러올 수 없습니다: ${projectId}`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      loadProjectDetail();
    }
  }, [projectId]);

  return { projectDetail, loading, error };
};
