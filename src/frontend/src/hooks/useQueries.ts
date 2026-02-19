import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitApplication() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      fullName: string;
      email: string;
      phoneNumber: string;
      dateOfBirth: string;
      previousSchool: string;
      gradeLevel: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitApplication(
        data.fullName,
        data.email,
        data.phoneNumber,
        data.dateOfBirth,
        data.previousSchool,
        data.gradeLevel
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
  });
}

export function useSubmitQuestion() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phoneNumber: string;
      question: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitQuestion(
        data.name,
        data.email,
        data.phoneNumber,
        data.question
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['questions'] });
    },
  });
}

export function useGetApplications() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['applications'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getApplications();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetQuestions() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['questions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getQuestions();
    },
    enabled: !!actor && !isFetching,
  });
}
