import java.sql.*;
import java.util.*;

public class JdbcExample {
    private static final String URL = "jdbc:mysql://localhost:3306/myjdbcdb";
    private static final String USER = "root";
    private static final String PASSWORD = "shivaraj2410";

    public static void main(String[] args) {
        try {
            // Step 1: Load MySQL JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Step 2: Establish Connection
            Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println("Connected to database!");

            // Step 3: Perform CRUD Operations
            Scanner sc = new Scanner(System.in);
            while (true) { 
                System.out.println("Select option:\n1.Insert into record\n2.Update record\n3.Delete record\n4.View record\n5.Exit\n");
                int option = sc.nextInt();
                sc.nextLine();
                if(option==1){
                    System.out.print("Name: ");
                    String name = sc.nextLine();
                    System.out.print("Email: ");
                    String email = sc.nextLine();
                    insertRecord(conn, name, email);
                }
                else if(option==2){
                    System.out.println("Enter id: ");
                    int id = sc.nextInt();sc.nextLine();
                    String email;
                    System.out.println("Enter new email: ");
                    email = sc.nextLine();
                    updateRecord(conn,id,email);
                }
                else if(option==3){
                    System.out.println("Enter id to delete: ");
                    int id = sc.nextInt();
                    deleteRecord(conn, id);
                }
                else if(option==4){
                    viewRecords(conn);
                }
                else{
                    break;
                }
            }
            // Step 4: Close Connection
            conn.close();
            sc.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        catch (ClassNotFoundException e){
            e.printStackTrace();
        }
    }

    // Insert Operation
    public static void insertRecord(Connection conn, String name, String email) throws SQLException {
        String sql = "INSERT INTO users (name, email) VALUES (?, ?)";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, name);
            pstmt.setString(2, email);
            int rows = pstmt.executeUpdate();
            System.out.println("Inserted " + rows + " row(s) successfully.");
        }
    }

    // Update Operation
    public static void updateRecord(Connection conn, int id, String newEmail) throws SQLException {
        String sql = "UPDATE users SET email = ? WHERE id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, newEmail);
            pstmt.setInt(2, id);
            int rows = pstmt.executeUpdate();
            System.out.println("Updated " + rows + " row(s) successfully.");
        }
    }

    // Delete Operation
    public static void deleteRecord(Connection conn, int id) throws SQLException {
        String sql = "DELETE FROM users WHERE id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setInt(1, id);
            int rows = pstmt.executeUpdate();
            System.out.println("Deleted " + rows + " row(s) successfully.");
        }
    }

    // View Records
    public static void viewRecords(Connection conn) throws SQLException {
        String sql = "SELECT * FROM users";
        try (PreparedStatement pstmt = conn.prepareStatement(sql);
             ResultSet rs = pstmt.executeQuery()) {
            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id") +
                                   ", Name: " + rs.getString("name") +
                                   ", Email: " + rs.getString("email"));
            }
        }
    }
}
