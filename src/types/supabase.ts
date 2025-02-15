export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bopl_draft: {
        Row: {
          created_at: string
          id: number
          is_active: boolean
          player_1: number | null
          player_2: number | null
          player_3: number | null
          player_4: number | null
          room_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          is_active?: boolean
          player_1?: number | null
          player_2?: number | null
          player_3?: number | null
          player_4?: number | null
          room_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          is_active?: boolean
          player_1?: number | null
          player_2?: number | null
          player_3?: number | null
          player_4?: number | null
          room_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bopl_draft_player_1_fkey"
            columns: ["player_1"]
            isOneToOne: false
            referencedRelation: "bopl_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bopl_draft_player_2_fkey"
            columns: ["player_2"]
            isOneToOne: false
            referencedRelation: "bopl_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bopl_draft_player_3_fkey"
            columns: ["player_3"]
            isOneToOne: false
            referencedRelation: "bopl_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bopl_draft_player_4_fkey"
            columns: ["player_4"]
            isOneToOne: false
            referencedRelation: "bopl_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bopl_draft_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "bopl_rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      bopl_rooms: {
        Row: {
          created_at: string
          created_by: number | null
          id: number
          is_active: boolean
          passcode: string | null
        }
        Insert: {
          created_at?: string
          created_by?: number | null
          id?: number
          is_active?: boolean
          passcode?: string | null
        }
        Update: {
          created_at?: string
          created_by?: number | null
          id?: number
          is_active?: boolean
          passcode?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bopl_rooms_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "bopl_users"
            referencedColumns: ["id"]
          },
        ]
      }
      bopl_rooms_users: {
        Row: {
          created_at: string
          id: number
          room_id: number
          user_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          room_id: number
          user_id: number
        }
        Update: {
          created_at?: string
          id?: number
          room_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "bopl_rooms_users_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "bopl_rooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bopl_rooms_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "bopl_users"
            referencedColumns: ["id"]
          },
        ]
      }
      bopl_users: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      channels: {
        Row: {
          created_by: string
          id: number
          inserted_at: string
          slug: string
        }
        Insert: {
          created_by: string
          id?: number
          inserted_at?: string
          slug: string
        }
        Update: {
          created_by?: string
          id?: number
          inserted_at?: string
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "channels_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          channel_id: number
          id: number
          inserted_at: string
          message: string | null
          user_id: string
        }
        Insert: {
          channel_id: number
          id?: number
          inserted_at?: string
          message?: string | null
          user_id: string
        }
        Update: {
          channel_id?: number
          id?: number
          inserted_at?: string
          message?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "channels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      role_permissions: {
        Row: {
          id: number
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Insert: {
          id?: number
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Update: {
          id?: number
          permission?: Database["public"]["Enums"]["app_permission"]
          role?: Database["public"]["Enums"]["app_role"]
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: number
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: number
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: number
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          id: string
          status: Database["public"]["Enums"]["user_status"] | null
          username: string | null
        }
        Insert: {
          id: string
          status?: Database["public"]["Enums"]["user_status"] | null
          username?: string | null
        }
        Update: {
          id?: string
          status?: Database["public"]["Enums"]["user_status"] | null
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      authorize: {
        Args: {
          requested_permission: Database["public"]["Enums"]["app_permission"]
          user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_permission: "channels.delete" | "messages.delete"
      app_role: "admin" | "moderator"
      user_status: "ONLINE" | "OFFLINE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
