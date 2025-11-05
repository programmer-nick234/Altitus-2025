export interface Database {
  public: {
    Tables: {
      departments: {
        Row: {
          id: string;
          name: string;
          short_code: string;
          logo_url: string | null;
          total_points: number;
          events_participated: number;
          recent_wins: string[];
        };
        Insert: {
          id?: string;
          name: string;
          short_code: string;
          logo_url?: string | null;
          total_points?: number;
          events_participated?: number;
          recent_wins?: string[];
        };
        Update: {
          id?: string;
          name?: string;
          short_code?: string;
          logo_url?: string | null;
          total_points?: number;
          events_participated?: number;
          recent_wins?: string[];
        };
      };
      events: {
        Row: {
          id: string;
          name: string;
          category: string | null;
          date: string;
        };
        Insert: {
          id?: string;
          name: string;
          category?: string | null;
          date?: string;
        };
        Update: {
          id?: string;
          name?: string;
          category?: string | null;
          date?: string;
        };
      };
      results: {
        Row: {
          id: string;
          event_id: string;
          first_place: string;
          second_place: string;
          third_place: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          event_id: string;
          first_place: string;
          second_place: string;
          third_place: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          event_id?: string;
          first_place?: string;
          second_place?: string;
          third_place?: string;
          created_at?: string;
        };
      };
    };
  };
}

// Helper types for easier usage
export type Department = Database['public']['Tables']['departments']['Row'];
export type Event = Database['public']['Tables']['events']['Row'];
export type Result = Database['public']['Tables']['results']['Row'];
