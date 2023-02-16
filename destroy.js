import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class hello world extends http servlet
{
    private string message;
    public void init() throws servletexception
    {
        message="hello world";
    }
    public void do get (http servlet request request http  servlet response throw served exception ,ioexception)
response.setcontent type("html/css")
printwriter out=response.getwrite();
out.println("<h1>+message+</h1>");
}
public void-destroy()
{
}
}